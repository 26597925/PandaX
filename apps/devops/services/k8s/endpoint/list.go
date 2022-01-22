package endpoint

import (
	v1 "k8s.io/api/core/v1"
	"pandax/apps/devops/entity/k8s"
)

type EndpointList struct {
	ListMeta k8s.ListMeta `json:"listMeta"`
	// List of endpoints
	Endpoints []Endpoint `json:"endpoints"`
}

// toEndpointList converts array of api events to endpoint List structure
func toEndpointList(endpoints []v1.Endpoints) *EndpointList {
	endpointList := EndpointList{
		Endpoints: make([]Endpoint, 0),
		ListMeta:  k8s.ListMeta{TotalItems: len(endpoints)},
	}

	for _, endpoint := range endpoints {
		for _, subSets := range endpoint.Subsets {
			for _, address := range subSets.Addresses {
				endpointList.Endpoints = append(endpointList.Endpoints, *toEndpoint(address, subSets.Ports, true))
			}
			for _, notReadyAddress := range subSets.NotReadyAddresses {
				endpointList.Endpoints = append(endpointList.Endpoints, *toEndpoint(notReadyAddress, subSets.Ports, false))
			}
		}
	}

	return &endpointList
}
