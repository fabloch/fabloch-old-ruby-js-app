describe Api::V1::UsersController do
  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create :user
      auth_headers = @user.create_new_auth_token
      request.headers.merge!(auth_headers)
      get :show, params: { id: @user.id }
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it "returns the serialized user attributes" do
      expect(
        JSON.parse(response.body)
      ).to eq(
        { "name" => nil, "email" => @user.email }
      )
    end
  end

  describe 'GET #index' do
    before(:each) do
      @user = FactoryGirl.create :user
      auth_headers = @user.create_new_auth_token
      request.headers.merge!(auth_headers)
      get :index, params: { id: @user.id }
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it 'returns the serialized user attributes' do
      expect(JSON.parse(response.body).length()).to eq(1)
      expect(
        JSON.parse(response.body).first()
      ).to eq(
        { "name" => nil, "email" => @user.email }
      )
    end
  end
end
