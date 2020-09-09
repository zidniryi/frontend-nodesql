import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'

const ViewAgen = () => {
  return (
    <Fragment>
      <NavBar />
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Cari Data Agen</h1>
      </div>

      <div class="container">
        <div class="form-group row">
          <div class="form-group mx-sm-4 mb-4">
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="Level"
              style={{ height: 40 }}
              // onChange={(e) => onChange(e)}
            >
              <option value="">Pilih Wialayah</option>
              <option value="RM">RM</option>
              <option value="RM">SM</option>
              <option value="UM">UM</option>
              <option value="FU">FU</option>
            </select>
          </div>
          <div class="form-check" style={{ marginTop: 10 }}>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label class="form-check-label" for="defaultCheck1">
              Status Aktif
            </label>
          </div>
          <div class="form-check">
            <button className="btn btn-primary">VIEW</button>
          </div>
        </div>
      </div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Wilayah</th>
              <th scope="col">RM</th>
              <th scope="col">SM</th>
              <th scope="col">UM</th>
              <th scope="col">FU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default ViewAgen
