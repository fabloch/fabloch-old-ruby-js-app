FactoryGirl.define do
  factory :profile do
    user
    username {Faker::Internet.user_name(5..8, %w(_))}
    firstname {Faker::Name.first_name}
    lastname {Faker::Name.last_name}
    description {Faker::Lorem.sentence}

    avatar Rack::Test::UploadedFile.new(File.open(File.join(Rails.root, '/spec/fixtures/test1.jpg')))

    # after :create do |b|
    #   b.update_column(:avatar, "public/uploads/profile/avatar/test1.jpg")
    # end
  end
end
