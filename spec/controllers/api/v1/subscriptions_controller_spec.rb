describe Api::V1::SubscriptionsController do
  describe "GET #index" do
    before(:each) do
      @user = FactoryGirl.create :user
      @subscription1 = FactoryGirl.create :subscription, user: @user
      @subscription2 = FactoryGirl.create :subscription, user: @user
      auth_headers = @user.create_new_auth_token
      request.headers.merge!(auth_headers)
      get :index
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it "returns the serialized subscriptions" do
      expect(
        JSON.parse(response.body)['data'][0]['attributes']
      ).to eq(
        {
          "paymentMethod" => "checkOrCash",
          "priceCents" => 200,
          "start" => "2017-05-24",
          "end" => "2018-05-23",
          "status" => "pending",
          "plan" => "regular",
        }
      )
      expect(
        JSON.parse(response.body)['data'][1]['attributes']
      ).to eq(
        {
          "paymentMethod" => "checkOrCash",
          "priceCents" => 200,
          "start" => "2017-05-24",
          "end" => "2018-05-23",
          "status" => "pending",
          "plan" => "regular",
        }
      )
    end
  end

  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create :user
      @subscription = FactoryGirl.create :subscription, user: @user
      auth_headers = @user.create_new_auth_token
      request.headers.merge!(auth_headers)
      get :show, params: { id: @subscription.id }
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it "returns the serialized user attributes" do
      expect(
        JSON.parse(response.body)['data']['attributes']
      ).to eq(
        {
          "paymentMethod" => "checkOrCash",
          "priceCents" => 200,
          "start" => "2017-05-24",
          "end" => "2018-05-23",
          "status" => "pending",
          "plan" => "regular",
        }
      )
    end
  end

  describe "POST #create" do
    context "invalid request" do
      before(:each) do
        @user = FactoryGirl.create :user
        auth_headers = @user.create_new_auth_token
        request.headers.merge!(auth_headers)
        post :create, params: { foo: "bar" }
      end

      it 'responds with 422 status code' do
        expect(response.code).to eq('422')
      end

      it "returns the serialized user attributes" do
        expect(
          JSON.parse(response.body)['plan'][0]
        ).to eq("can't be blank")
      end
    end

    context "valid request - checkOrCash" do
      before(:each) do
        @user = FactoryGirl.create :user
        auth_headers = @user.create_new_auth_token
        request.headers.merge!(auth_headers)
        headers = { "X-Key-Inflection" => "camel" }
        request.headers.merge!(headers)
        post(:create, params: {
          paymentMethod: "checkOrCash",
          priceCents: 200,
          start: "2017-05-24",
          end: "2018-05-23",
          status: "pending",
          plan: "regular",
        })
      end

      it 'responds with 201 status code' do
        expect(response.code).to eq('201')
      end

      it "returns the serialized user attributes" do
        # print(JSON.parse(response.body))
        expect(
          JSON.parse(response.body)['data']['attributes']
        ).to eq(
          {
            "paymentMethod" => "checkOrCash",
            "priceCents" => 200,
            "start" => "2017-05-24",
            "end" => "2018-05-23",
            "status" => "pending",
            "plan" => "regular",
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

  # describe "PUT #update" do
  #   before(:each) do
  #     @profile = FactoryGirl.create :profile
  #     @user = @profile.user
  #     auth_headers = @user.create_new_auth_token
  #     request.headers.merge!(auth_headers)
  #     put :update, params: {
  #       username: "seb_nicolaids",
  #       firstname: "Sébastien",
  #       lastname: "Nicolaïdis",
  #       description: "Some description",
  #       birthday: "1979-09-13",
  #       avatar: fixture_file_upload('spec/fixtures/test2.jpg', 'image/jpg')
  #     }
  #   end
  #
  #   it 'responds with 200 status code' do
  #     expect(response.code).to eq('200')
  #   end
  #
  #   it "returns the serialized user attributes" do
  #     id = @profile.id
  #     expect(
  #       JSON.parse(response.body)['data']['attributes']
  #     ).to eq(
  #       {
  #         "username" => "seb_nicolaids",
  #         "firstname" => "Sébastien",
  #         "lastname" => "Nicolaïdis",
  #         "description" => "Some description",
  #         "birthday" => "1979-09-13",
  #         "img_large" => "/Users/sebastiennicolaidis/dev/ruby/fab_loch/spec/support/uploads/profile/avatar/#{id}/large_test2.jpg",
  #         "img_medium" => "/Users/sebastiennicolaidis/dev/ruby/fab_loch/spec/support/uploads/profile/avatar/#{id}/medium_test2.jpg",
  #         "img_small" => "/Users/sebastiennicolaidis/dev/ruby/fab_loch/spec/support/uploads/profile/avatar/#{id}/small_test2.jpg",
  #       }
  #     )
  #   end
  # end
  #
  # describe "DELETE #destroy" do
  #   before(:each) do
  #     @profile = FactoryGirl.create :profile
  #     @user = @profile.user
  #     auth_headers = @user.create_new_auth_token
  #     request.headers.merge!(auth_headers)
  #     delete :destroy
  #   end
  #
  #   it 'returns status code 204' do
  #     expect(response).to have_http_status(204)
  #     expect(Profile.all()).to be_empty
  #   end
  # end
  #
end
