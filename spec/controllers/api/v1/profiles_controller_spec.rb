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
          "imgLarge" => @profile.avatar_url(:large),
          "imgMedium" => @profile.avatar_url(:medium),
          "imgSmall" => @profile.avatar_url(:small),
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
        post :create, params: {
          foo: "bar",
        }
      end

      it 'responds with 422 status code' do
        expect(response.code).to eq('422')
      end

      it "returns the serialized user attributes" do
        expect(
          JSON.parse(response.body)['username'][0]
        ).to eq("can't be blank")
      end
    end

    context "valid request" do
      before(:each) do
        @user = FactoryGirl.create :user
        auth_headers = @user.create_new_auth_token
        request.headers.merge!(auth_headers)
        post(:create, params: {
          username: "seb_nicolaids",
          firstname: "Sébastien",
          lastname: "Nicolaïdis",
          description: "Some description",
          birthday: "1979-09-13",
          avatar: fixture_file_upload('spec/fixtures/test1.jpg', 'image/jpg')
        })
      end

      it 'responds with 201 status code' do
        expect(response.code).to eq('201')
      end

      it "returns the serialized user attributes" do
        expect(
          JSON.parse(response.body)['data']['attributes']
        ).to eq(
          {
            "username" => "seb_nicolaids",
            "firstname" => "Sébastien",
            "lastname" => "Nicolaïdis",
            "description" => "Some description",
            "birthday" => "1979-09-13",
            "imgLarge" => @user.profile.avatar_url(:large),
            "imgMedium" => @user.profile.avatar_url(:medium),
            "imgSmall" => @user.profile.avatar_url(:small),
          }
        )
      end

      it "links profile with current_user" do
        expect(
          Profile.last().user
        ).to eq(@user)
      end
    end
  end

  describe "PUT #update" do
    before(:each) do
      @profile = FactoryGirl.create :profile
      @user = @profile.user
      auth_headers = @user.create_new_auth_token
      request.headers.merge!(auth_headers)
      put :update, params: {
        username: "seb_nicolaids",
        firstname: "Sébastien",
        lastname: "Nicolaïdis",
        description: "Some description",
        birthday: "1979-09-13",
        avatar: fixture_file_upload('spec/fixtures/test2.jpg', 'image/jpg')
      }
    end

    it 'responds with 200 status code' do
      expect(response.code).to eq('200')
    end

    it "returns the serialized user attributes" do
      id = @profile.id
      expect(
        JSON.parse(response.body)['data']['attributes']
      ).to eq(
        {
          "username" => "seb_nicolaids",
          "firstname" => "Sébastien",
          "lastname" => "Nicolaïdis",
          "description" => "Some description",
          "birthday" => "1979-09-13",
          "imgLarge" => "/Users/sebastiennicolaidis/dev/ruby/fab_loch/spec/support/uploads/profile/avatar/#{id}/large_test2.jpg",
          "imgMedium" => "/Users/sebastiennicolaidis/dev/ruby/fab_loch/spec/support/uploads/profile/avatar/#{id}/medium_test2.jpg",
          "imgSmall" => "/Users/sebastiennicolaidis/dev/ruby/fab_loch/spec/support/uploads/profile/avatar/#{id}/small_test2.jpg",
        }
      )
    end
  end

  describe "DELETE #destroy" do
    before(:each) do
      @profile = FactoryGirl.create :profile
      @user = @profile.user
      auth_headers = @user.create_new_auth_token
      request.headers.merge!(auth_headers)
      delete :destroy
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
      expect(Profile.all()).to be_empty
    end
  end

end
