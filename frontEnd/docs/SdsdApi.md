# TempApi.SdsdApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createsdsd**](SdsdApi.md#createsdsd) | **POST** /sdsd | Creates the data
[**deletesdsd**](SdsdApi.md#deletesdsd) | **DELETE** /sdsd/{sdsdId} | Delete the element
[**getAllsdsd**](SdsdApi.md#getAllsdsd) | **GET** /sdsd/getAll | Get all the data
[**getsdsd**](SdsdApi.md#getsdsd) | **GET** /sdsd/{sdsdId} | Get the element
[**updatesdsd**](SdsdApi.md#updatesdsd) | **PUT** /sdsd/{sdsdId} | Updates the element



## createsdsd

> Sdsd createsdsd(sdsd)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SdsdApi();
let sdsd = new TempApi.Sdsd(); // Sdsd | data to be created
apiInstance.createsdsd(sdsd, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sdsd** | [**Sdsd**](Sdsd.md)| data to be created | 

### Return type

[**Sdsd**](Sdsd.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletesdsd

> deletesdsd(sdsdId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SdsdApi();
let sdsdId = "sdsdId_example"; // String | the Id parameter
apiInstance.deletesdsd(sdsdId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sdsdId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllsdsd

> [Sdsd] getAllsdsd()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SdsdApi();
apiInstance.getAllsdsd((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Sdsd]**](Sdsd.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getsdsd

> Sdsd getsdsd(sdsdId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SdsdApi();
let sdsdId = "sdsdId_example"; // String | the Id parameter
apiInstance.getsdsd(sdsdId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sdsdId** | **String**| the Id parameter | 

### Return type

[**Sdsd**](Sdsd.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatesdsd

> Sdsd updatesdsd(sdsdId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SdsdApi();
let sdsdId = "sdsdId_example"; // String | the Id parameter
let opts = {
  'sdsd': new TempApi.Sdsd() // Sdsd | data to be updated
};
apiInstance.updatesdsd(sdsdId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sdsdId** | **String**| the Id parameter | 
 **sdsd** | [**Sdsd**](Sdsd.md)| data to be updated | [optional] 

### Return type

[**Sdsd**](Sdsd.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

