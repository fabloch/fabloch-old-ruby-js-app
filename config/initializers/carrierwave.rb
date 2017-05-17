CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider:              'AWS',
    aws_access_key_id:     ENV['AWS_PUBLIC'],
    aws_secret_access_key: ENV['AWS_SECRET'],
    region:                ENV['S3_REGION'],
    # host:                  's3.example.com',             # optional, defaults to nil
    # endpoint:              'https://s3.example.com:8080' # optional, defaults to nil
  }
  config.storage = :fog
  config.fog_directory  = ENV['S3_BUCKET']
  # config.fog_public     = false # optional, defaults to true
  # config.fog_attributes = { cache_control: "public, max-age=#{365.day.to_i}" } # optional, defaults to {}
end

if Rails.env.test? or Rails.env.cucumber?
  CarrierWave.configure do |config|
    # config.permissions = 0666
    # config.directory_permissions = 0777
    config.storage = :file
    config.enable_processing = false
  end
end

if Rails.env.development? or Rails.env.test?
  CarrierWave.configure do |config|
    config.ignore_integrity_errors = false
    config.ignore_processing_errors = false
    config.ignore_download_errors = false
  end
end
