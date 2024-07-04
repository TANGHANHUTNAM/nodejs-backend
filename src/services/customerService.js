const Customer = require("../models/customer");
const aqp = require("api-query-params");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const createArrayCustomerService = async (array) => {
  try {
    let result = await Customer.insertMany(array);
    return result;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const getAllCustomersService = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      console.log("filter: ", filter);
      result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const putUpdateCustomerService = async (id, name, email, address) => {
  try {
    let result = await Customer.updateOne(
      { _id: id },
      {
        name: name,
        email: email,
        address: address,
      }
    );
    return result;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const deleteACustomerService = async (id) => {
  try {
    let result = await Customer.deleteById({ _id: id });
    return result;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const deleteArrayCustomerService = async (arrayIds) => {
  try {
    let result = await Customer.delete({ _id: { $in: arrayIds } });
    return result;
  } catch (error) {
    return null;
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteACustomerService,
  deleteArrayCustomerService,
};
