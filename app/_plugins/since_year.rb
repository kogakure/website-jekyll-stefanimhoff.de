# Author: Stefan Imhoff
#
# Output years since a specific year
#
# Usage: {% since_year 1999 %}
#

require 'date'

class SinceYear < Liquid::Tag
  def initialize(tag_name, since_year, tokens)
    super
    @since_year = since_year.to_i
    @current_year = Date.today.strftime("%Y").to_i
    @difference = @current_year - @since_year
  end

  def render(context)
    @difference.to_s
  end
end

Liquid::Template.register_tag('since_year', SinceYear)
