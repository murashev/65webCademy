class ExampleItem {
   constructor(name, phone, email, product) {
      this.name = name
      this.phone = phone
      this.email = email
      this.product = product
   }
}

const testData = [
   new ExampleItem('Иван', parseInt(+79261111111), 'ivan@ivan.com', 'course-js'),
   new ExampleItem('Петр', parseInt(+79261111112), 'petr@ivan.com', 'course-vue'),
   new ExampleItem('Вова', parseInt(+79261111113), 'vova@ivan.com', 'course-html'),
   new ExampleItem('Таня', parseInt(+79261111114), 'tata@ivan.com', 'course-php'),
   new ExampleItem('Маша', parseInt(+79261111115), 'masha@ivan.com', 'course-wordpress'),
   new ExampleItem('Катя', parseInt(+79261111116), 'katya@ivan.com', 'course-js'),
   new ExampleItem('Вика', parseInt(+79261111117), 'vika@ivan.com', 'course-vue'),
   new ExampleItem('Лена', parseInt(+79261111118), 'lena@ivan.com', 'course-html'),
   new ExampleItem('Леша', parseInt(+79261111119), 'lesha@ivan.com', 'course-php'),
]

function getRandomIndex(max) {
   return Math.floor(Math.random() * max)
}

export default function getRandomData() {
   const index = getRandomIndex(testData.length)
   return testData[index]
}