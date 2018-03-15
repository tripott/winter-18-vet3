# API Endpoint Reference

## Documents

The Vet application manages two types of documents: categories and resources.

## Categories

A category helps to organize resources. A resource is related to a category.

A category contains the following properties:

```json
{
  "_id": "category_basic-needs-assistance",
  "name": "Basic Needs Assistance",
  "shortDesc": "shelter, domestic violence, food, financial assistance"
  "desc":
    "BasicNeeds Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship.",
  "type": "category",
  "icon": "restaurant"
}
```

## Resources

```JSON
{
"_id": "resource_va-homeless-prevention",
"type": "resource",
"categoryId": "category_basic-needs-assistance",
"name": "VA Homeless Prevention",
"formalName": "VA Homeless Prevention Program & Walk-In Clinic",
"shortDesc": "Walk in clinic, re-housing assistance",
"purpose": "The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care",
"website": " http://www.charleston.va.gov/services/homeless/index.asp",
"primaryPhone": "843-577-5011",
"contacts": [
  {
    "name": "Linda Williams",
    "office": "Ralph H. Johnson Veterans Affairs Medical Center",
    "title": null,
    "phone": "843-577-5011",
    "email": null,
    "isPrimary": true
  }
],
"addresses": [
  {
    "location": "Ralph H. Johnson Veterans Affairs Medical Center",
    "street": "109 Bee Street",
    "city": "Charleston",
    "state": "SC",
    "zip": "29401",
    "isPrimary": true
  }
]
}
```
