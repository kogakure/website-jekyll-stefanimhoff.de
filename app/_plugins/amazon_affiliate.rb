module Jekyll
  class AmazonAffiliate < Liquid::Tag

    def initialize(name, asin, tokens)
      super
      @asin = asin.strip
    end

    def render(context)
      %(http://www.amazon.de/gp/product/#{@asin}?ie=UTF8&tag=kogakurede-21&linkCode=as2&camp=1638&creative=6742&creativeASIN=#{@asin})
    end
  end
end

Liquid::Template.register_tag('amazon', Jekyll::AmazonAffiliate)
