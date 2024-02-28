import React from 'react'

export default function ObjectConstructors() {


	function book(title, author, read, pages) {
		this.title = title;
		this.author = author;
		this.read = read;
		this.pages = pages;

	}

	book.prototype.info = function() {
		return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
	}



	function stripBook(title, author, read, pages) {
		this.title = title;
		this.author = author;
		this.read = read;
		this.pages = pages;
	}

	const mario = new book('luigie is evil', 'mario', 'no', '1000')

	console.log(mario.title)

	const luigie = new stripBook('mario is evil', 'luigie', 'no', '1000')

	Object.setPrototypeOf(stripBook.prototype, book.prototype)

	console.log(luigie.info())






// mario.readBook()
// console.log(Object.getPrototypeOf(Object.prototype))





	return (
		<div>
			<h1>Object constructors loaded</h1>

		</div>
		)
}
