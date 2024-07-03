const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteACustomerService,
} = require("../services/customerService");
module.exports = {
  postCreateCustomer: async (req, res) => {
    const { name, address, phone, email, description } = req.body;
    let imageURL = "";
    if (!req.files || Object.keys(req.files).length === 0) {
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageURL = result.path;
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageURL,
    };

    let customer = await createCustomerService(customerData);

    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(500).json({
        EC: -1,
        data: customers,
      });
    }
  },
  getAllCustomers: async (req, res) => {
    let customers = await getAllCustomersService();
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(500).json({
        EC: -1,
        data: customers,
      });
    }
  },
  putUpdateCustomer: async (req, res) => {
    const { name, address, email, id } = req.body;

    let customer = await putUpdateCustomerService(id, name, address, email);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);

    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
