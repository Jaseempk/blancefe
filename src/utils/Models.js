import Moralis from 'moralis';
import { Object as MoralisObject } from 'moralis/types/objects/object';

const getString = result => result ? result.toString() : "undefined";

// Gig class
class Gig extends MoralisObject {
  constructor() {
    super('Gig');
  }

  getId() {
    return getString(this.id);
  }

  getThumbnail() {
    return this.get('thumbnail');
  }

  getTitle() {
    return getString(this.get('title'));
  }

  getPrice() {
    return getString(this.get('price'));
  }

  getDeliveryTime() {
    return getString(this.get('deliveryTime'));
  }

  getSellerId() {
    return getString(this.get('sellerId'));
  }

  getDesc() {
    return getString(this.get('description'));
  }

  getCategory() {
    return getString(this.get('category'));
  }
}

// Order class
class Order extends MoralisObject {
  constructor() {
    super('Order');
  }

  getId() {
    return getString(this.id);
  }

  getGigId() {
    return getString(this.get('gigId'));
  }

  getBuyerId() {
    return getString(this.get('buyerId'));
  }

  getSellerId() {
    return getString(this.get('sellerId'));
  }

  getTxHash() {
    return getString(this.get('txHash'));
  }

  getStatus() {
    return getString(this.get('status'));
  }
}

// Category class
class Category extends MoralisObject {
  constructor() {
    super('Category');
  }

  getId() {
    return getString(this.id);
  }

  getTitle() {
    return getString(this.get('title'));
  }

  getThumbnail() {
    return this.get('thumbnail');
  }
}

// SubCategory class
class SubCategory extends MoralisObject {
  constructor() {
    super('SubCategory');
  }

  getId() {
    return getString(this.id);
  }

  getTitle() {
    return getString(this.get('title'));
  }

  getThumbnail() {
    return this.get('thumbnail');
  }

  getCategory() {
    return getString(this.get('category'));
  }
}

export { Gig, Order, Category, SubCategory };


/**
 * 
 * import moralis from 'moralis'

const getString = result => result ? result.toString() : "undefined"

// Database Objects
export const Gig = moralis.Object.extend("Gig", {
    getId: function() {
      return getString(this.id)
    },
    getThumbnail: function() {
      return this.get('thumbnail')
    },
    getTitle: function() {
      return getString(this.get('title'))
    },
    getPrice: function() {
      return getString(this.get('price'))
    },
    getDeliveryTime: function() {
      return getString(this.get('deliveryTime'))
    },
    getSellerId: function() {
      return getString(this.get('sellerId'))
    },
    getDesc: function() {
      return getString(this.get('description'))
    },
    getCategory: function() {
      return getString(this.get('category'))
    },
  })
  
export const Order = moralis.Object.extend("Order", {
    getId: function() {
      return getString(this.id)
    },
    getGigId: function() {
      return getString(this.get("gigId"))
    },
    getBuyerId: function() {
      return getString(this.get("buyerId"))
    },
    getSellerId: function() {
      return getString(this.get("sellerId"))
    },
    getTxHash: function() {
      return getString(this.get("txHash"))
    },
    getStatus: function() {
      return getString(this.get("status"))
    }
  })

// Database Objects
export const Category = moralis.Object.extend("Category", {
  getId: function() {
    return getString(this.id)
  },
  getTitle : function() {
    return getString(this.get('title'))
  },
  getThumbnail: function() {
    return this.get('thumbnail')
  }
})

export const SubCategory = moralis.Object.extend("SubCategory", {
  getId: function() {
    return getString(this.id)
  },
  getTitle: function() {
    return getString(this.get('title'))
  },
  getThumbnail: function() {
    return this.get('thumbnail')
  },
  getCategory: function() {
    return getString(this.get('category'))
  }
})
 */