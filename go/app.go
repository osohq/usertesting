package main

import (
	"fmt"
	"net/http"
	"strings"
)

func main() {
	http.HandleFunc("/organization/", func(w http.ResponseWriter, r *http.Request) {
		orgID := strings.TrimPrefix(r.URL.Path, "/organization/")

		fmt.Fprintf(w, "{\"id\": \"%s\"}", orgID)
	})

	http.ListenAndServe(":8000", nil)
}
