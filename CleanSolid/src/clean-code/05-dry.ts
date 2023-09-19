type Size = '' | 'S' | 'M' |'L'

class Product {
    constructor(
        public name: string = '',
        public price:number = 0,
        public size: Size = '',
    ){}

    isProductReady():boolean{
         // if( this.name.length <= 0 ) throw Error('name is empty')
        // if( this.price <= 0 ) throw Error('price is zero')
        // if( this.size.length <= 0 ) throw Error('size is empty')
        // const stringProperties = ['name','size']

        for( const key in this){
            // console.log(key, typeof this[key])
            switch( typeof this[key]){
                case 'string':
                    // if( (<string><unknown>this[key]).length <=0) throw Error(`${key} is empty`)
                    if( (<string>this[key]).length <= 0 ) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if( (<number>this[key]) <= 0 ) throw Error(`${key} is zero`);
                    break;
                default:
                    throw Error(`${ typeof this[key] } not valid`)
            }
        }
        return true;
    }

    toString(){
       
        if( !this.isProductReady ) return;
        
        return `${ this.name } (${this.price}), ${ this.size }`
    }
}

(() => {

    const bluePants = new Product('Blue Large Pants', 10, 'M')

    console.log(bluePants.toString())

})();