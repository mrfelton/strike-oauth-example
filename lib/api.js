import ky from 'ky';

export const INVOICE_STATE_UNPAID = 'UNPAID';
export const INVOICE_STATE_PAID = 'PAID';

var client;

// Set up an API client.
const init = (apiUrl, apikey) => {
  client = ky.create({
    prefixUrl: apiUrl,
    headers: {
      'Authorization': `Bearer ${apikey}`,
      'Content-Type': 'application/json'
    }
  });
}

const getHandle = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params.handle;
}

const getProfile = async handle => {
  return await client
    .get(`accounts/handle/${handle}/profile`)
    .json();
}

const createInvoice = async (handle, amount, currency, description = "Tip!") => {
  return await client
    .post(`invoices/handle/${handle}`, { json: { amount: { currency: currency, amount: amount } } })
    .json();
}

const createQuote = async invoiceId => {
  return await client
    .post(`invoices/${invoiceId}/quote`)
    .json();
}

const getInvoice = async invoiceId => {
  return await client
    .get(`invoices/${invoiceId}`)
    .json();
}

const getInvoices = async invoiceId => {
  return await client
    .get(`invoices/`)
    .json();
}

const pollInvoice = async (invoice, until) => {
  return await poll(() => getInvoice(invoice.invoiceId), ({ state }) => state == INVOICE_STATE_PAID, until, 1000)
    .catch(err => console.error(err));
}

const setCurrecyOptions = () => {
  var fragment = document.createDocumentFragment();
  profile.currencies.forEach(function(curerncy, index) {
     var opt = document.createElement('option');
     opt.innerHTML = curerncy.currency;
     opt.value = curerncy.currency;
     fragment.appendChild(opt);
  });
  currencyField.appendChild(fragment);
  currencyField.value = profile.currencies.find(c => c.isDefaultCurrency).currency;
}

export const api = {
  init,
  getHandle,
  getProfile,
  getInvoices,
  createInvoice,
  createQuote,
  getInvoice,
  pollInvoice,
  setCurrecyOptions
};
