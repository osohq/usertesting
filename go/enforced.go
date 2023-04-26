package main

import (
	"fmt"
	"net/http"
	"strings"

	oso "github.com/osohq/go-oso-cloud"
)

func main() {
	apiKey := "<please provide your api key here>"
	osoClient := oso.NewClient("https://cloud.osohq.com", apiKey)

	http.HandleFunc("/organization/", func(w http.ResponseWriter, r *http.Request) {
		orgID := strings.TrimPrefix(r.URL.Path, "/organization/")

		actor := oso.Instance{Type: "User", ID: "anonymous"}
		resource := oso.Instance{Type: "Organization", ID: orgID}

		allowed, e := osoClient.Authorize(actor, "view", resource)
		if e != nil || !allowed {
			// Handle authorization failure
			http.Error(w, "Not Found", http.StatusNotFound)
			return
		}

		fmt.Fprintf(w, "{\"id\": \"%s\"}", orgID)
	})

	http.ListenAndServe(":8000", nil)
}
