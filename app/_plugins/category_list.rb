module Jekyll
  class CategoryListTag < Liquid::Tag
    def render(context)
      html = ""
      categories = context.registers[:site].categories.keys
      dir = context.registers[:site].config['category_dir']

      categories.sort.each do |category|
        if category =~ /(.+)\[(.+)\]/
          slug = $1.strip
          title = $2.strip
        else
          slug = title = category
        end

        url = slug.to_url
        url = "#{dir}/#{url}" unless dir.nil? or dir.empty?
        html << "<li><a class=\"category\" href=\"/#{url}\">#{title}</a></li>\n"
      end
      html
    end
  end
end

Liquid::Template.register_tag('category_list', Jekyll::CategoryListTag)
