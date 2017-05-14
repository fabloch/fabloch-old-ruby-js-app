FactoryGirl.define do
  factory :profile do
    user
    username {Faker::Internet.user_name(5..8, %w(_))}
    firstname {Faker::Name.first_name}
    lastname {Faker::Name.last_name}
    description {Faker::Lorem.sentence}
  end
end
