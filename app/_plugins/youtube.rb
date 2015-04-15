module Jekyll
  class Youtube < Liquid::Tag

    def initialize(name, id, tokens)
      super
      @id = id.strip
    end

    def render(context)
      %(<iframe src="http://www.youtube.com/embed/#{@id}"></iframe>)
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::Youtube)