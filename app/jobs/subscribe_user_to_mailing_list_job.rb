class SubscribeUserToMailingListJob < ApplicationJob
  queue_as :default

  def perform(user)
    hashed_email = Digest::MD5.hexdigest(user.email.downcase)
    puts("hashed_email: ", hashed_email)
    begin
      gibbon = Gibbon::Request.new
      gibbon.lists(ENV["MAILCHIMP_LIST_ID"]).members(hashed_email).upsert(
        body: {
          email_address: user.email,
          status: "subscribed",
          # merge_fields: {
          #   FNAME: "First Name",
          #   LNAME: "Last Name"
          # },
          double_optin: false,
        }
      )
    rescue Gibbon::MailChimpError => e
      puts "Houston, we have a problem: #{e.message} - #{e.raw_body}"
    end
  end
end
