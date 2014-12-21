module Jekyll
  class TagListTag < Liquid::Tag
    def render(context)
      html = ""
      tags = context.registers[:site].tags.keys
      dir = context.registers[:site].config['tag_dir']

      tags.sort.each do |tag|
        if tag =~ /(.+)\[(.+)\]/
          slug = $1.strip
          title = $2.strip
        else
          slug = title = tag
        end

        url = slug.to_url
        url = "#{dir}/#{url}" unless dir.nil? or dir.empty?
        html << "<li><a class=\"tag\" href=\"/#{url}\">#{title}</a></li>\n"
      end
      html
    end
  end
end

Liquid::Template.register_tag('tag_list', Jekyll::TagListTag)
