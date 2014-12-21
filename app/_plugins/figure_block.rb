#
# Author: Stefan Imhoff
#
# Outputs a figure with optional class(es) and optional figcaption
#
#   {% figure class1 class2 class3 "This is the figcaption" %}
#   ...
#   {% endfigure %}
#
#   {% figure class %}
#   ...
#   {% endfigure %}
#
#   {% figure "This is the figcaption" %}
#   ...
#   {% endfigure %}
#
#   {% figure %}
#   ...
#   {% endfigure %}

module Jekyll

  class FigureBlock < Liquid::Block
    FigureWithClassCaption = /([^"]+)"([^"]+)"/i
    FigureWithCaption = /"([^"]+)"/i
    FigureWithClass = /([\w\s\-]+)/i

    def initialize(tag_name, markup, tokens)
      @class = nil
      @caption = nil
      if markup =~ FigureWithClassCaption
        @class = $1
        @caption = $2
      elsif markup =~ FigureWithCaption
        @caption = $1
      elsif markup =~ FigureWithClass
        @class = $1
      end

      @caption = @caption.strip unless @caption.nil?
      @class = @class.strip unless @class.nil?

      super
    end

    def render(context)
      content = super
      content = content.strip

      if @class
        source = "<figure class=\"#{@class}\">\n"
      else
        source = "<figure>\n"
      end

      source += "<div class=\"figure-content\">#{content}</div>"

      if @caption
        source += "<figcaption>#{@caption}</figcaption>\n"
      else
        source += ""
      end

      source += "\n</figure>"

      source
    end

  end
end

Liquid::Template.register_tag('figure', Jekyll::FigureBlock)
