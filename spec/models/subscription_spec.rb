require 'rails_helper'

RSpec.describe Subscription, type: :model do
  context "valid Factory" do
    it "has a valid factory" do
      expect(build(:subscription)).to be_valid
    end
  end

  context "relations" do
    it { should belong_to(:user) }
    it { should have_one(:charge) }
  end

  context "values" do
    it "confirmed defaults to false" do
      subscription = create(:subscription)
      expect(subscription.confirmed).to be(false)
    end
    it { should validate_inclusion_of(:payment_method).in_array(["card", "checkOrCash"]) }
  end

  context "validations" do
    context "presence" do
      it { should validate_presence_of(:user) }
      it { should validate_presence_of (:plan) }
      it { should validate_presence_of (:start_date) }
      it { should validate_presence_of (:end_date) }
      it { should validate_presence_of (:price_cents) }
      it { should validate_presence_of (:payment_method) }
      it { should_not validate_presence_of (:confirmed) }

      # it { should allow_value("").for(:firstname) }
      # it { should allow_value("").for(:lastname) }
      # it { should allow_value("").for(:description) }
      # it { should allow_value("").for(:birthday) }
    end

    context "format" do
      # it { should allow_value("seb_nicolaidis").for(:username) }
      # it { should allow_value("seb_nicolaidis2").for(:username) }
      # it { should_not allow_value("Seb_Nicolaidis").for(:username) }
      # it { should_not allow_value("seb-nicolaidis").for(:username) }
      # it { should_not allow_value("$eb_nicolaidis").for(:username) }
    end

    context "length" do
      # it { should validate_length_of(:username).is_at_least(3).is_at_most(20) }
      # it { should validate_length_of(:description).is_at_least(3).is_at_most(140) }
    end

    context "uniqueness" do
      # it { should validate_uniqueness_of(:username).ignoring_case_sensitivity }
    end

    context "money rails" do
      it {is_expected.to monetize(:price).with_currency(:eur)}
    end
  end

end
