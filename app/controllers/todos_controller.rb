class TodosController < InheritedResources::Base
  actions :all
  respond_to :html, :json
  
  def backbone
    render :backbone, :layout => false
  end
end
