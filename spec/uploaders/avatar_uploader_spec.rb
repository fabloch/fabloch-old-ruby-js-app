require 'carrierwave/test/matchers'

describe AvatarUploader do
  include CarrierWave::Test::Matchers

  before do
    profile = build(:profile_with_avatar)
    @uploader = AvatarUploader.new(profile, :avatar)

    AvatarUploader.enable_processing = true
    File.open("spec/fixtures/test.jpg") { |f| @uploader.store!(f) }
  end

  after do
    AvatarUploader.enable_processing = false
    @uploader.remove!
  end

  context 'the normal version' do
    it "scaled down a landscape image to fit in 1920 by 1920 pixels" do
      expect(@uploader).to be_no_larger_than(1920, 1920)
    end
  end

  context 'the medium version' do
    it "scales down a landscape image to be exactly 1024 by 1024 pixels" do
      expect(@uploader.large).to have_dimensions(1024, 1024)
    end
  end

  context 'the medium version' do
    it "scales down a landscape image to be exactly 640 by 640 pixels" do
      expect(@uploader.medium).to have_dimensions(640, 640)
    end
  end

  context 'the small version' do
    it "scales down a landscape image to be exactly 320 by 320 pixels" do
      expect(@uploader.small).to have_dimensions(320, 320)
    end
  end

  # it "makes the image readable only to the owner and not executable" do
  #   expect(@uploader).to have_permissions(0600)
  # end
  #

  it "has the correct format" do
    expect(@uploader).to be_format('JPEG')
  end
end
