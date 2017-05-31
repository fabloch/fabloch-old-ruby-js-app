require 'rails_helper'

RSpec.describe Charge, type: :model do
  context "valid Factory" do
    it "has a valid factory" do
      expect(build(:charge)).to be_valid
    end
  end

  context "relations" do
    it { should belong_to(:chargeable) }
  end

  context "presence" do
    it { should validate_presence_of(:chargeable) }
    it { should validate_presence_of(:amount_cents) }
    it { should validate_presence_of(:token) }
  end

  context "format" do
    it { should allow_value(100).for(:amount_cents) }
    it { should_not allow_value(100.1).for(:amount_cents) }
    it { should_not allow_value("Foo").for(:amount_cents) }
  end
end
