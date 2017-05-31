require "stripe"
Stripe.api_key = ENV['STRIPE_PUBLIC_TEST']

describe Api::V1::SubscriptionsController do
  before(:each) do
    @user = FactoryGirl.create :user
    auth_headers = @user.create_new_auth_token
    request.headers.merge!(auth_headers)
  end

  describe "GET #index" do
    before(:each) do
      @subscription1 = FactoryGirl.create :subscription, user: @user
      @subscription2 = FactoryGirl.create :subscription, user: @user
      get :index
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it "returns the serialized subscriptions" do
      expect(
        JSON.parse(response.body)
      ).to eq(
        [
          {
            "plan" => "regular",
            "paymentMethod" => "checkOrCash",
            "priceCents" => 2000,
            "startDate" => "2017-05-24",
            "endDate" => "2018-05-23",
            "confirmed" => false,
          },
          {
            "plan" => "regular",
            "paymentMethod" => "checkOrCash",
            "priceCents" => 2000,
            "startDate" => "2017-05-24",
            "endDate" => "2018-05-23",
            "confirmed" => false,
          }
        ]
      )
    end
  end

  describe "GET #show" do
    before(:each) do
      @subscription = FactoryGirl.create :subscription, user: @user
      get :show, params: { id: @subscription.id }
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it "returns the serialized user attributes" do
      expect(
        JSON.parse(response.body)
      ).to eq(
        {
          "plan" => "regular",
          "paymentMethod" => "checkOrCash",
          "priceCents" => 2000,
          "startDate" => "2017-05-24",
          "endDate" => "2018-05-23",
          "confirmed" => false,
        }
      )
    end
  end

  describe "POST #create" do
    context "super invalid request" do
      before(:each) do
        post :create, params: { foo: "bar" }
      end

      it 'responds with 422 status code' do
        expect(response.code).to eq('422')
      end

      it "returns the serialized user attributes" do
        expect(
          JSON.parse(response.body)['plan'][0]
        ).to eq(
          "doit être rempli(e)"
        )
      end
    end

    context "checkOrCash" do
      context "valid request" do
        before(:each) do
          post(:create, params: {
            plan: "regular",
            paymentMethod: "checkOrCash",
            priceCents: 2000,
            startDate: "2017-05-24",
            endDate: "2018-05-23",
          })
        end

        it 'responds with 201 status code' do
          expect(response.code).to eq('201')
        end

        it "returns the serialized user attributes" do
          # print(JSON.parse(response.body))
          expect(
            JSON.parse(response.body)
          ).to eq(
            {
              "plan" => "regular",
              "paymentMethod" => "checkOrCash",
              "priceCents" => 2000,
              "startDate" => "2017-05-24",
              "endDate" => "2018-05-23",
              "confirmed" => false,
            }
          )
        end

        it "links subscription with current_user" do
          expect(
            Subscription.last().user
          ).to eq(@user)
        end
      end
    end

    ap "Tests involving Stripe are commented"
    # context "card" do
    #   context "valid request" do
    #     before(:each) do
    #       @token = Stripe::Token.create(
    #         :card => {
    #           :number => "4242424242424242",
    #           :exp_month => 5,
    #           :exp_year => (Time.now + 1.year).strftime("%Y"),
    #           :cvc => "314"
    #         },
    #       )
    #       post(:create, params: {
    #         plan: "regular",
    #         paymentMethod: "card",
    #         priceCents: 2000,
    #         startDate: "2017-05-24",
    #         endDate: "2018-05-23",
    #         token: @token.id
    #       })
    #     end
    #
    #     it 'responds with 201 status code' do
    #       expect(response.code).to eq('201')
    #     end
    #
    #     it "returns the serialized user attributes" do
    #       # print(JSON.parse(response.body))
    #       expect(
    #         JSON.parse(response.body)
    #       ).to eq(
    #         {
    #           "plan" => "regular",
    #           "paymentMethod" => "card",
    #           "priceCents" => 2000,
    #           "startDate" => "2017-05-24",
    #           "endDate" => "2018-05-23",
    #           "confirmed" => true,
    #         }
    #       )
    #     end
    #
    #     it "links subscription with current_user" do
    #       expect(
    #         Subscription.last().user
    #       ).to eq(@user)
    #     end
    #
    #     it "links subscription with charge" do
    #       expect(
    #         Subscription.last().charge
    #       ).to_not be_nil
    #     end
    #   end
    #
    #   context "invalid request" do
    #     context "incorrect_cvc" do
    #       before(:each) do
    #         @token = Stripe::Token.create(
    #           :card => {
    #             :number => "4000000000000101",
    #             :exp_month => 5,
    #             :exp_year => (Time.now + 1.year).strftime("%Y"),
    #             :cvc => "314"
    #           },
    #         )
    #         post(:create, params: {
    #           plan: "regular",
    #           paymentMethod: "card",
    #           priceCents: 2000,
    #           startDate: "2017-05-24",
    #           endDate: "2018-05-23",
    #           token: @token.id
    #         })
    #       end
    #
    #       it 'responds with 402 status code' do
    #         expect(response.code).to eq('402')
    #       end
    #
    #       it "returns error, incorrect_cvc" do
    #         # print(JSON.parse(response.body))
    #         expect(
    #           JSON.parse(response.body)
    #         ).to eq(
    #           {
    #             "error" => "incorrect_cvc",
    #           }
    #         )
    #       end
    #     end
    #
    #     context "card_declined" do
    #       before(:each) do
    #         @token = Stripe::Token.create(
    #           :card => {
    #             :number => "4000000000000002",
    #             :exp_month => 5,
    #             :exp_year => (Time.now + 1.year).strftime("%Y"),
    #             :cvc => "314"
    #           },
    #         )
    #         post(:create, params: {
    #           plan: "regular",
    #           paymentMethod: "card",
    #           priceCents: 2000,
    #           startDate: "2017-05-24",
    #           endDate: "2018-05-23",
    #           token: @token.id
    #         })
    #       end
    #
    #       it 'responds with 402 status code' do
    #         expect(response.code).to eq('402')
    #       end
    #
    #       it "returns error, card_declined" do
    #         # print(JSON.parse(response.body))
    #         expect(
    #           JSON.parse(response.body)
    #         ).to eq(
    #           {
    #             "error" => "card_declined",
    #           }
    #         )
    #       end
    #     end
    #
    #     context "incorrect_number" do
    #       before(:each) do
    #         @token = Stripe::Token.create(
    #           :card => {
    #             :number => "4242424242424241",
    #             :exp_month => 5,
    #             :exp_year => (Time.now + 1.year).strftime("%Y"),
    #             :cvc => "314"
    #           },
    #         )
    #         post(:create, params: {
    #           plan: "regular",
    #           paymentMethod: "card",
    #           priceCents: 2000,
    #           startDate: "2017-05-24",
    #           endDate: "2018-05-23",
    #           token: @token.id
    #         })
    #       end
    #
    #       it 'responds with 402 status code' do
    #         expect(response.code).to eq('402')
    #       end
    #
    #       it "returns error, incorrect_number" do
    #         # print(JSON.parse(response.body))
    #         expect(
    #           JSON.parse(response.body)
    #         ).to eq(
    #           {
    #             "error" => "incorrect_number",
    #           }
    #         )
    #       end
    #     end
    #   end
    # end
  end
end
