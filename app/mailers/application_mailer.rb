class ApplicationMailer < ActionMailer::Base
  before_filter :add_inline_attachments!

  default from: ENV['MAIN_EMAIL']

  layout 'mailer'

  private

  def add_inline_attachments!
    attachments.inline['logo.png'] = File.read(
      "#{Rails.root}/app/assets/images/email/splash.png"
    )
  end
end
