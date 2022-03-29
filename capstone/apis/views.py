from rest_framework import generics, viewsets, permissions, filters

from ygt import models
from .serializers import YgtSerializer

# class ListYgt(generics.ListCreateAPIView):
#     queryset = models.Ygt.objects.all()
#     serializer_class = YgtSerializer


# class DetailYgt(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Ygt.objects.all()
#     serializer_class = YgtSerializer


class YgtViewSet(viewsets.ModelViewSet):
    queryset = models.Ygt.objects.all()
    serializer_class = YgtSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']