source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.2'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

# Auth
gem 'devise_token_auth'
gem 'omniauth'

# Api
gem 'active_model_serializers'
gem 'rack-cors'
gem 'rack-attack'

# ActiveAdmin
gem 'devise', '> 4.x'
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', git: 'https://github.com/activeadmin/inherited_resources'

# Document upload
gem "mini_magick"
gem "fog-aws"
gem 'carrierwave', '~> 1.0'

# Money
gem 'money-rails', '~>1'

# Stripe
gem 'stripe'

# Mailchimp
gem "gibbon"

group :development, :test do
  gem "awesome_print"
  gem 'rspec-rails'
  gem 'guard-rspec', require: false
  gem 'factory_girl_rails'
  gem 'shoulda-matchers', git: 'https://github.com/thoughtbot/shoulda-matchers.git', branch: 'rails-5'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'pry-stack_explorer'
  gem 'faker'
  gem 'dotenv-rails', groups: [:development, :test] # Local env variables
  gem 'webmock'
end

group :development do
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'foreman'
end
