export default class GotService{
    
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();;
    };

    getAllCharacters = async () => {
       const res = await this.getResource('/characters?page=5&pageSize=10');
       return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(res);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    _isEmpty = (text) => {
        return text ? text : "No data :(";
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return{
            id: this._extractId(char),
            name: this._isEmpty(char.name),
            gender: this._isEmpty(char.gender),
            born: this._isEmpty(char.born),
            died: this._isEmpty(char.died),
            culture: this._isEmpty(char.culture)  
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this._isEmpty(house.name),
            region: this._isEmpty(house.region),
            words: this._isEmpty(house.words),
            titles: this._isEmpty(house.titles),
            overlord: this._isEmpty(house.overlord),
            ancestralWeapons: this._isEmpty(house.ancestralWeapons)  
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this._isEmpty(book.name),
            numberOfPages: this._isEmpty(book.numberOfPages),
            publisher: this._isEmpty(book.publisher),
            released: this._isEmpty(book.released)  
        }
    }
}

