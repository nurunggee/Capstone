from rest_framework import serializers
from ygt import models


class YgtSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = models.Ygt