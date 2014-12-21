#
# Author: Stefan Imhoff
#
# Based on blockquote.rb of: Brandon Mathis
#
# Outputs a string with a given attribution as a quote and preserves the layout (for a verse)
#
#   {% verse Lewis Carroll, Jabberwocky (1832-98)  %}
#    ‘Twas brillig, and the slithy toves
#    Did gyre and gimble            in the wabe;
#    All mimsy     were     the borogoves,
#    And       the mome     raths            outgrabe.
#   {% endverse %}
#   ...
#   <blockquote class="verse">
#   <pre>
#     <p>
#       ‘Twas brillig, and the slithy toves<br>
#       Did gyre and gimble            in the wabe;<br>
#       All mimsy     were     the borogoves,<br>
#       And       the mome     raths            outgrabe.
#     </p>
#   </pre>
#   </blockquote>
#

module Jekyll

  class Verse < Liquid::Block
    FullCiteWithTitleVerse = /(\S.*)\s+(https?:\/\/)(\S+)\s+(.+)/i
    FullCiteVerse = /(\S.*)\s+(https?:\/\/)(\S+)/i
    AuthorTitleVerse = /([^,]+),([^,]+)/
    AuthorVerse =  /(.+)/

    def initialize(tag_name, markup, tokens)
      @by = nil
      @source = nil
      @title = nil
      if markup.strip =~ FullCiteWithTitleVerse
        @by = $1
        @source = $2 + $3
        @title = $4.strip
      elsif markup.strip =~ FullCiteVerse
        @by = $1
        @source = $2 + $3
      elsif markup.strip =~ AuthorTitleVerse
        @by = $1
        @title = $2.strip
      elsif markup.strip =~ AuthorVerse
        @by = $1
      end
      super
    end

    def render(context)
      quote = paragraphize(super)
      author = "<strong>#{@by.strip}</strong>" if @by
      if @source
        url = @source.match(/https?:\/\/(.+)/)[1].split('/')
        parts = []
        url.each do |part|
          if (parts + [part]).join('/').length < 32
            parts << part
          end
        end
        source = parts.join('/')
        source << '/&hellip;' unless source == @source
      end
      if !@source.nil?
        cite = " <cite><a href='#{@source}'>#{(@title || source)}</a></cite>"
      elsif !@title.nil?
        cite = " <cite>#{@title}</cite>"
      end
      blockquote = if @by.nil?
        quote
      elsif cite
        "#{quote}<footer>#{author + cite}</footer>"
      else
        "#{quote}<footer>#{author}</footer>"
      end
      "<blockquote class=\"verse\"><pre>#{blockquote}</pre></blockquote>"
    end

    def paragraphize(input)
      "<p>#{input.lstrip.rstrip.gsub(/\n\n/, '</p><p>').gsub(/\n/, '<br/>')}</p>"
    end
  end
end

Liquid::Template.register_tag('verse', Jekyll::Verse)
