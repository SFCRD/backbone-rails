class TodosController < InheritedResources::Base
  actions :all
  respond_to :html, :json
end
