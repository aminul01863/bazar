import React from 'react';

const MegaMenu = () => {
    return (
      <div className='container'>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">
              Active
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#home"
              role="button"
              aria-expanded="false"
            >
              Link
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#home">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#home">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#home">
                  Something else here
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#home">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Disabled
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Disabled
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Disabled
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Disabled
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
};

export default MegaMenu;