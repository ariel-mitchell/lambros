package org.launchcode.demo.data;

import jakarta.annotation.Resource;
import org.launchcode.demo.models.AdminHash;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminHashRepository extends CrudRepository<AdminHash, Integer> {
}