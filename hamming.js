var Hamming = {
    compute: function(s1, s2) {

    	if(s1.length != s2.length) {
    		
    		throw new Error('DNA strands must be of equal length.'); 
    	}
        var diff = 0;
        for (i = 0; i < input1.length; i++) {
            if (s1[i] != s2[i]) {
                diff = diff + 1;            
            };
        };
        return diff;
    }
};

module.exports = Hamming;   