import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
export const serverSiteKey = "6LfCwxUqAAAAAA8_fqx8WjtfApR94jjwB8lj-EU7";
export const localSiteKey = "6Lf48xMqAAAAAOex8ulpZ137BsmHR2Z828UPZNPG";
const cookie = new Cookies();

// axios.defaults.baseURL = 'https://sitserpapi.sitslive.com/'
// const baseURL = 'https://playmaster.playmaster11.com/api/'
const baseURL = "https://shivacha.ai/api";

axios.defaults.headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// //Intercept Request
axios.interceptors.request.use(
  function (request) {
    return request;
  },
  null,
  { synchronous: true }
);

// //Intercept Response
axios.interceptors.response.use(
  function (response) {
    console.log(response, "api");
    return response;
  },
  function (error) {
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // if (error.response.status === 401) {
    //   //Request refresh token
    //   let accessToken = cookie.get('AccessToken')
    //   let refreshToken = cookie.get('RefreshToken')

    //   try {
    //     const response = postRequest(
    //       'Login/refreshToken',
    //       JSON.stringify({
    //         AccessToken: accessToken,
    //         RefreshToken: refreshToken,
    //       }),
    //     )
    //     if (response.status === 200) {
    //       cookie.set('AccessToken', response.data.data.token.accessToken)
    //       cookie.set('RefreshToken', response.data.data.token.refreshToken)
    //     } else {
    //       cookie.set('AccessToken', '')
    //       cookie.set('RefreshToken', '')
    //     }
    //   } catch (e) {}

    //   //Redirect to login page or
    // } else if (error.response.status === 400) {
    //   cookie.set('AccessToken', '')
    //   cookie.set('RefreshToken', '')
    //   window.location.replace('/')
    // } else if (error.response.status === 404) {
    //   cookie.set('AccessToken', '')
    //   cookie.set('RefreshToken', '')

    // }
    return Promise.reject(error);
  }
);

// //Upload Progress
// const [progress, setProgress] = useState(0);

// //Logic to show upload progress

// const config = {
//    onUploadProgress: progressEvent => {
//      const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
//      setProgress(percentCompleted);
//    }
//  };

// try {
//    const updatedData = axios.put('/upload/server', data, config);
//    return updatedData.response.data;
//  } catch(error) {
//    //log error
//    }
// }

//All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000;

//axiosClient.defaults.withCredentials = true;

// export async function getRequest(URL, param, token) {
//   const result = await axios
//     .get(baseURL + URL + '?' + param, {
//       headers: { authorization: `Bearer ${token}` },
//     })
//     .then((response) => response)
//   return result
// }
export async function getRequest(URL, param, token) {
  const result = await axios
    .get(baseURL + URL, {
      headers: { authorization: `Bearer ${token}` },
     
    })
    .then((response) => response);
  return result;
}
export async function getRequestAudio(URL, param, token) {
  const result = await axios
    .get(baseURL + URL, {
      headers: { authorization: `Bearer ${token}` },
      responseType: "arraybuffer",
    })
    .then((response) => response);
  return result;
}

export async function postRequestImageVideo(URL, formData) {
  try {
    const response = await axios.post(baseURL + URL, formData, {
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Ensure this matches the FormData content type
      },
      //  responseType: "arraybuffer",
    });

    return response;
  } catch (error) {
    console.error("Error posting request:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}

export async function postRequest(URL, payload, token) {
  try {
    const response = await axios.post(baseURL + URL, payload, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // responseType: "arraybuffer",
    });

    return response;
  } catch (error) {
    console.error("Error : --", error);
  }
}

export async function patchRequest(URL, payload, token) {
  try {
    const response = await axios.put(baseURL + URL, payload, {
      headers: { authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    console.error("Error : --", error);
  }
}

export async function deleteRequest(URL, token) {
  try {
    const response = await axios.delete(baseURL + URL, {
      headers: { authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    console.error("Error : --", error);
  }
}
export async function deleteBulkRequest(URL,payload, token) {

  try {
    const response = await axios.post(baseURL + URL, payload, {
      // headers: { authorization: `Bearer ${token}` },
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.error("Error : --", error);
  }
}
