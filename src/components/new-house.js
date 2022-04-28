import React from 'react'
import { Link } from 'gatsby'

const NewHouse = () => (
  <div className='new-house-form'>
    <h4>Новый дом</h4>
    <form method="post" action="#">
      <table>
        <tr>
          <td>Название дома</td>
          <td><input type="text" name="name" id="name" /></td>
        </tr>
        <tr>
          <td>Район</td>
          <td><input type="text" name="name" id="name" /></td>
        </tr>
        <tr>
          <td>Цена в тенге</td>
          <td><input type="number" name="tengePrice" id="tengePrice" /></td>
        </tr>
        <tr>
          <td>Цена в евро</td>
          <td><input type="number" name="tengePrice" id="tengePrice" /></td>
        </tr>
        <tr>
          <td>Фотография</td>
          <td><input type="file" name="image" id="image" /></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="Добавить"/> <input type="reset" value="Очистить" /></td>
        </tr>
      </table>
      
      
    </form>
  </div>
)

export default NewHouse