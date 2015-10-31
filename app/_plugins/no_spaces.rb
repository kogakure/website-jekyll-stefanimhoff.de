# Author: Stefan Imhoff
#
#
module Jekyll
  module NoSpacesFilter
    def nospace(input)
      input.gsub! /(\b\w{1}\.)\s+(\b\w{1}\.)\s+(\b\w{1}\.)/, '\1&nbsp;\2&nbsp;\3' # i. d. R.
      input.gsub! /(\b\w{1}\.)\s+(\b\w{1}\.)/, '\1&nbsp;\2' # z. B.
      input.gsub! /(\d+)\s(\W|x)\s(\d+)/, '\1&nbsp;\2&nbsp;\3' # 4 / 2 or 5 * 3
      input.gsub! /(\d+)\s(\$|€|¥|¢|£)/, '\1&nbsp;\2' # Find currencies like 1000 $ or 500 €
      input
    end
  end
end

Liquid::Template.register_filter(Jekyll::NoSpacesFilter)
