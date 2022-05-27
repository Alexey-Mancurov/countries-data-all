const countriesData = require("../index");

const getCountryCodesWithFlags = () => {
  return countriesData.map((country) => ({
    country: country.country,
    countryCodes: country.countryCodes,
    flag: country.flag,
  }));
};

const getIsoCodes = () => {
  return countriesData.map((country) => ({
    country: country.country,
    isoCode2: country.isoCode2,
    isoCode3: country.isoCode3,
  }));
};

module.exports = {getCountryCodesWithFlags, getIsoCodes};
