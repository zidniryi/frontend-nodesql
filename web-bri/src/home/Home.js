import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">INPUT DATA AGEN</h1>
      </div>

      <div class="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">No Lisensi</label>
            <input
              type="number"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Nomor Lisensi"
              name="licenseNumber"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Nama Agen</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nama Agen"
              name="agenName"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Tipe Agen</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="Level"
              style={{ height: 40 }}
              // onChange={(e) => onChange(e)}
            >
              <option value="">Level</option>
              <option value="RM">RM</option>
              <option value="RM">SM</option>
              <option value="UM">UM</option>
              <option value="FU">FU</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Wilayah</label>
            <input
              type="text"
              class="form-control"
              placeholder="Wilayah"
              name="area"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Status Aktif
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default Home
