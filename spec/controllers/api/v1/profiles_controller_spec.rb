describe Api::V1::ProfilesController do
  describe "GET #show" do
    before(:each) do
      @profile = FactoryGirl.create :profile
      @user = @profile.user
      auth_headers = @user.create_new_auth_token
      request.headers.merge!(auth_headers)
      get :show
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it "returns the serialized user attributes" do
      expect(
        JSON.parse(response.body)['data']['attributes']
      ).to eq(
        {
          "username" => @profile.username,
          "firstname" => @profile.firstname,
          "lastname" => @profile.lastname,
          "description" => @profile.description,
          "birthday" => @profile.birthday,
        }
      )
    end
  end
end
