const initialValue = {
	data : {
		email : null,
		token : null,
		refToken : null,
	},
	isLoading : false,
	isError: false
}

export default (state = initialValue, action) => {
  	switch (action.type) {
	    case 'POST_LOGIN_PENDING':
	    	return{
	    		...state,
	    		isLoading : true
	    	}

	    case 'POST_LOGIN_FULFILLED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : action.payload.data,
	    	}

	    case 'POST_LOGIN_REJECTED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		isError : true,
	    	}

	    case 'POST_REGIST_PENDING':
	    	return{
	    		...state,
	    		isLoading : true
	    	}

	    case 'POST_REGIST_FULFILLED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : action.payload.data,
	    	}

	    case 'POST_REGIST_REJECTED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		isError : true,
	    	}

	    case 'CHECK_LOGIN_PENDING':
	    	return{
	    		...state,
	    		isLoading : true
	    	}

	    case 'CHECK_LOGIN_FULFILLED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : action.payload.data,
	    	}

	    case 'CHECK_LOGIN_REJECTED':
	    	return{
	    		...state,
	    		isLoading : false,
	    		isError : true,
	    	}

	    case 'PUT_TOKEN':
	    	return{
	    		...state,
	    		isLoading : false,
	    		data : {
	    			token : action.payload.token,
	    			refToken : action.payload.refToken
	    		}
	    	}

	    default:
	    	return state;
	   
	}
}


