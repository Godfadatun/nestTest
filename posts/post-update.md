# Update Post

{% api-method method="patch" host="https://api.cakes.com" path="/posts/:id" %}
{% api-method-summary %}
Get Cakes
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to get free cakes.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" %}
ID of the cake to get, for free of course.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="title" type="string" required=false %}
This is the Title of the Header
{% endapi-method-parameter %}

{% api-method-parameter name="sub\_header" type="string" required=false %}
This is the sub header for the post
{% endapi-method-parameter %}

{% api-method-parameter name="content" type="string" required=false %}
The content of the post
{% endapi-method-parameter %}

{% api-method-parameter name="category" type="string" required=false %}
This categorizes the post
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



