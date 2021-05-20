from rest_framework.test import APITestCase


class CustomerViewSetTestCase(APITestCase):
    """
    TODO: The test cases around POST are fairly thorough but the same thoroughness should
          be applied to the rest of the HTTP verbs.
    """
    def test__create_customer__success(self):
        post_data = {
            "name": "Evan Smith",
            "company": "e^2 software",
            "priority": "M",
        }
        
        resp = self.client.post("/api/customers/", data=post_data)
        resp_data = resp.data

        self.assertEqual(resp.status_code, 201)
        self.assertIsNotNone(resp_data['id'])
        self.assertEqual(resp_data['name'], 'Evan Smith')
        self.assertEqual(resp_data['company'], 'e^2 software')
        self.assertEqual(resp_data['priority'], 'M')

    def test__create_customer__no_name__returns_400(self):
        post_data = {
            "company": "e^2 software",
            "priority": "M",
        }
        
        resp = self.client.post("/api/customers/", data=post_data)

        self.assertEqual(resp.status_code, 400)

    def test__create_customer__no_company__returns_400(self):
        post_data = {
            "name": "Evan Smith",
            "priority": "M",
        }
        
        resp = self.client.post("/api/customers/", data=post_data)

        self.assertEqual(resp.status_code, 400)

    def test__create_customer__no_priority__defaults_to_low(self):
        post_data = {
            "name": "Evan Smith",
            "company": "e^2 software",
        }
        
        resp = self.client.post("/api/customers/", data=post_data)
        resp_data = resp.data

        self.assertEqual(resp.status_code, 201)
        self.assertIsNotNone(resp_data['id'])
        self.assertEqual(resp_data['name'], 'Evan Smith')
        self.assertEqual(resp_data['company'], 'e^2 software')
        self.assertEqual(resp_data['priority'], 'L')

    def test__retrieve_customer__success(self):
        post_data = {
                "name": "Evan Smith",
                "company": "e^2 software",
            }
            
        resp = self.client.post("/api/customers/", data=post_data)
        resp_data = resp.data
        self.assertEqual(resp.status_code, 201)

        resp = self.client.get(f"/api/customers/{resp_data['id']}/", data=resp_data)
        resp_data = resp.data

        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp_data['id'])
        self.assertEqual(resp_data['name'], 'Evan Smith')
        self.assertEqual(resp_data['company'], 'e^2 software')
        self.assertEqual(resp_data['priority'], 'L')

    def test__update_customer__success(self):
        post_data = {
            "name": "Evan Smith",
            "company": "e^2 software",
        }
        
        resp = self.client.post("/api/customers/", data=post_data)
        resp_data = resp.data
        self.assertEqual(resp.status_code, 201)

        resp_data['priority'] = 'C'
        resp = self.client.put(f"/api/customers/{resp_data['id']}/", data=resp_data)
        resp_data = resp.data

        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp_data['id'])
        self.assertEqual(resp_data['name'], 'Evan Smith')
        self.assertEqual(resp_data['company'], 'e^2 software')
        self.assertEqual(resp_data['priority'], 'C')

    def test__delete_customer__success(self):
        post_data = {
            "name": "Evan Smith",
            "company": "e^2 software",
        }
        
        resp = self.client.post("/api/customers/", data=post_data)
        resp_data = resp.data
        self.assertEqual(resp.status_code, 201)

        resp = self.client.delete(f"/api/customers/{resp_data['id']}/", data=resp_data)
        self.assertEqual(resp.status_code, 204)

        resp = self.client.get(f"/api/customers/{resp_data['id']}/", data=resp_data)

        self.assertEqual(resp.status_code, 404)

class RandomCustomerAPIViewTestCase(APITestCase):
    """
    TODO: This tests that the endpoint returns a 200 and a populated customer 
          but doesn't test if it returns a random customer. Not entirely sure
          how to gaurantee what we are getting back is "random"
    """
    def test__random_customer__success(self):
        post_data = {
            "name": "Evan Smith",
            "company": "e^2 software",
        }
        
        resp = self.client.post("/api/customers/", data=post_data)
        self.assertEqual(resp.status_code, 201)
        
        post_data = {
            "name": "Bob Bobertson",
            "company": "Bob Business",
        }
        resp = self.client.post("/api/customers/", data=post_data)
        self.assertEqual(resp.status_code, 201)
        
        resp = self.client.get("/api/customers/random/")
        resp_data = resp.data
        
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp_data['id'])
        self.assertIsNotNone(resp_data['name'])
        self.assertIsNotNone(resp_data['company'])
        self.assertIsNotNone(resp_data['priority'])
    
    def test__random_customer__no_customers__returns_404(self):      
        resp = self.client.get("/api/customers/random/")
        self.assertEqual(resp.status_code, 404)
