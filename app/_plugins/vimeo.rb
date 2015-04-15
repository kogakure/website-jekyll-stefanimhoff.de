module Jekyll
  class Vimeo < Liquid::Tag

    def initialize(name, id, tokens)
      super
      @id = id.strip
    end

    def render(context)
      %(<iframe src="http://player.vimeo.com/video/#{@id}" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>)
    end
  end
end

Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)