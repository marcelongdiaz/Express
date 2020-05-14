new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
      return {
        todos:[
            {text: 'Advanced Reports'}
        ],
        headers: [
        //   {
        //     text: 'Dessert (100g serving)',
        //     align: 'start',
        //     sortable: true,
        //     value: 'name',
        //   },
        //   { text: 'Calories', value: 'calories' },
        //   { text: 'Fat (g)', value: 'fat' },
        //   { text: 'Carbs (g)', value: 'carbs' },
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [],
      }
    },
    methods: {
        // toTitleCase(s){
        //     return this.charAt(0).toUpperCase() + this.slice(1)
        //   }
    },
    mounted: function(){
            var self = this;
            var tempHeaders = []
            $.getJSON("/json/desserts.json", function(json_data) {
                self.desserts = json_data;
                let headersArray = Object.keys(json_data[0]);
                
                console.log(headersArray);
                $.each(headersArray, function(index){

                    let title = toTitleCase(headersArray[index]);
                    if(index == 0){
                        let details = {
                            text: title,
                            align: 'start',
                            sortable: true,
                            value: headersArray[index],
                          }
                          tempHeaders.push(details);
                    }
                    else{
                        let details = { 
                            text: title, 
                            value: headersArray[index] 
                        }
                        tempHeaders.push(details)
                    }
                });

                // push header data in tempHeader;
                self.headers = tempHeaders;
            });
    }
  });
  
  function toTitleCase(s){
      console.log(s)
    return s.charAt(0).toUpperCase() + s.slice(1)
  }