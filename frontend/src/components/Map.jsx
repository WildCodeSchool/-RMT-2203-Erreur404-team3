/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 46.4653,
        lng: -0.8061,
      },
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.setState({ address });
        this.setState({ mapCenter: latLng });
        const userLocation = `${address} Lat : ${latLng.lat} Long : ${latLng.lng}`;
        console.warn("The user location is : ", userLocation);
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <div id="googleMap">
        <PlacesAutocomplete
          className="googlePlaces"
          style={{
            width: "100%",
          }}
          defaultOptions={{
            disableDefaultStyles: true,
            disableDefaultUI: true, // disable default map UI
            draggable: true, // make map draggable
            keyboardShortcuts: false, // disable keyboard shortcuts
            scaleControl: true, // allow scale controle
            scrollwheel: true, // allow scroll wheel
            styles: {
              color: "#000",
              // width: "80%",
              // height: "80%",
            },
          }}
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div
              className="input-localisation"
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                position: "relative",
              }}
            >
              <input
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: "0",
                  height: "5vh",
                }}
                {...getInputProps({
                  placeholder: "Taper votre texte ici...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && (
                  <div style={{ fontFamily: "arial" }}>Loading...</div>
                )}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? {
                        backgroundColor: "none",
                        cursor: "grab",
                        color: "#000",
                      }
                    : {
                        backgroundColor: "none",
                        cursor: "grab",
                        color: "#000",
                      };
                  return (
                    <div
                      className="googleSuggest"
                      style={{
                        margin: "0",
                        position: "relative",
                        display: "inline",
                        fontFamily: "Petemoss",
                        fontSize: "1.5rem",
                      }}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <div
          className="googleMapContainer"
          style={{
            margin: "-30% 12%",
            // width: "100%",
          }}
        >
          <Map
            className="googleMap"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              top: "0%",
              left: "-33%",
            }}
            defaultOptions={{
              disableDefaultStyles: true,
              disableDefaultUI: true, // disable default map UI
              draggable: true, // make map draggable
              keyboardShortcuts: false, // disable keyboard shortcuts
              scaleControl: true, // allow scale controle
              scrollwheel: true, // allow scroll wheel
              styles: {
                color: "#000",
                // width: "80%",
                // height: "80%",
              },
            }}
            google={this.props.google}
            initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          >
            <Marker
              defaultOptions={{
                disableDefaultStyles: true,
                disableDefaultUI: true, // disable default map UI
                draggable: true, // make map draggable
                keyboardShortcuts: false, // disable keyboard shortcuts
                scaleControl: true, // allow scale controle
                scrollwheel: true, // allow scroll wheel
                styles: {
                  color: "#000",
                  // width: "80%",
                  // height: "80%",
                },
              }}
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
              }}
            />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
})(MapContainer);
