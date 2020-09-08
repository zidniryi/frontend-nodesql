import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'

const EntryAgen = () => {
  return (
    <Fragment>
      <NavBar />
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">INPUT ENTRY AGEN</h1>
      </div>

      <div class="container">
        <form>
          <div class="form-group">
            <label for="exampleInputPassword1">Pilih Nama Agen</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="Level"
              style={{ height: 40 }}
              // onChange={(e) => onChange(e)}
            >
              <option value="">Nama Agen</option>
              <option value="RM">RM</option>
              <option value="RM">SM</option>
              <option value="UM">UM</option>
              <option value="FU">FU</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Nama Atasan</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              name="Level"
              style={{ height: 40 }}
              // onChange={(e) => onChange(e)}
            >
              <option value="">Nama Atasan</option>
              <option value="RM">RM</option>
              <option value="RM">SM</option>
              <option value="UM">UM</option>
              <option value="FU">FU</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Mulai Berlaku</label>
            <input
              type="date"
              class="form-control"
              placeholder="Tanggal"
              name="startDate"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Akhir Berlaku</label>
            <input
              type="date"
              class="form-control"
              placeholder="Tanggal"
              name="endDate"
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

export default EntryAgen
