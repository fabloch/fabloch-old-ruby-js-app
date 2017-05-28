module ApiHelper
  extend ActiveSupport::Concern

  class HashTransformer
    # Returns a new hash with all keys converted by the block operation.
    #  hash = { person: { name: 'Rob', age: '28' } }
    #  hash.deep_transform_keys { |key| key.to_s.upcase }
    #  # => {"PERSON"=>{"NAME"=>"Rob", "AGE"=>"28"}}
    def deep_transform_keys(hash, &block)
      result = {}
      hash.each do |k, v|
        result[yield(k)] = value.is_a?(Hash) ? deep_transform_keys(v, &block) : v
      end
      result
    end

    def snakecase_keys(hash)
      deep_transform_keys(hash) { |k| k.to_s.underscore.to_sym }
    end
  end

  def snakecase_params
    HashTransformer.new.snakecase_keys(params)
  end
end
